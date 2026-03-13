import RoundCta from '~/components/reusables/RoundCta'
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from '@remix-run/react'
import { icons } from '~/assets/icons'
import FormControl from '~/components/reusables/FormControl'
import Select from '~/components/reusables/Select'
import Cta from '~/components/reusables/Cta'
import PermissionsFormControl from '~/components/admin/PermissionsFormControl'
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { permissions } from '~/lib/data/admin'
import RolesFormControl from '~/components/admin/RolesFormControl'
import { adminRepo } from '~/services/admin/admin.server'
import { ILoginResponseDTO } from '~/services/auth/types/auth.dtos'
import { useEffect } from 'react'
import { toast } from '~/components/reusables/use-toast'
import { ICreateAdminUser } from '~/services/admin/types/admin.interface'

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return redirect("/login");
  
  const rolesResponse = await adminRepo.getAllRoles(cookieHeader);
  if(rolesResponse.authRequired) return redirect("/login");

  return { roles: rolesResponse.data, permissions }
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return redirect("/login");
  //
  
  let dto: ICreateAdminUser = {
      fullName: `${formData.get("firstName") as string} ${formData.get("lastName") as string}`,
      email: formData.get("email") as string,
      password:formData.get("password") as string,
      has_admin_access:  formData.get("has_admin_access") == "1"? true : false,
      is_superuser: false,
      is_staff: formData.get("is_staff") == "1"? true : false,
      is_active : formData.get("is_active") == "1"? true : false,
      username: formData.get("username") as string,
      roles: formData.getAll('role') as string[] ?? []
  }

  const response = await adminRepo.createAdminUser(cookieHeader, dto);
  // console.log(dto, response)
  // console.log(...formData)
  // console.log(formData.getAll('permission'))
  // console.log(formData.getAll('role'))
  return response;
}

export function useAddAdminUser(){
  const { permissions, roles } = useLoaderData<typeof loader>()
  const rolesNames: string[] = []
  for(const roleName in roles){
    rolesNames.push(roleName);
  }
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const actionData = useActionData<{ data?: ILoginResponseDTO; error?: any }>();
    useEffect(() => {
      if (actionData?.error) {
        console.log(actionData.error)
        toast({
          variant: "destructive",
          title: "Create action failed",
          description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not create admin user!",
        });
      }
      if (actionData?.data) {
        toast({
          variant: "default",
          title: "Create admin successful",
          description: "Admin account was successfully created!",
        });
      }
    }, [actionData]);

    return {permissions, rolesNames, isSubmitting}
}

export default function AddAdminUser() {

  const {permissions, rolesNames, isSubmitting} = useAddAdminUser();
  // const roles = permissions; 
  const navigate = useNavigate()
  return (
    <main className='w-full overflow-y-auto p-6'>
      <div className="flex items-center mb-10 sm:mb-16 gap-4">
        <RoundCta icon={icons.arrowPrevIcon} className="hover:bg-[#F7F7F8] text-primary" onClick={() => navigate(-1)} />
        <h1 className="text-2xl font-black text-primary">Add User</h1>
      </div>
      <Form className='sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm' method='post'>
        <FormControl as='input' labelText='First Name' className='' placeholder='Enter first name' id='firstName' name='firstName' required />
        <FormControl as='input' labelText='Last Name' className='' placeholder='Enter last name' id='lastName' name='lastName' required />
        <FormControl as='input' labelText='Email Address' className='' placeholder='Enter email address' id='email' name='email' required />
        <FormControl as='input' labelText='Username' className='' placeholder='Enter username' id='username' name='username' required />
        <FormControl as='input' labelText='Password' className='' placeholder='Enter username' id='password' name='password' required />
       
        <Select label='Assign Staff' id='is_staff' name='is_staff' defaultValue={"1"} required>
          <option value="0">Disable</option>
          <option value="1">Enable</option>
        </Select>

        <Select label='Set Active' id='is_active' name='is_active' defaultValue={"1"} required>
          <option value="0">De-activate</option>
          <option value="1">Activate</option>
        </Select>

        <Select label='Has Admin access' id='has_admin_access' name='has_admin_access' defaultValue={"1"} required>
          <option value="0">False</option>
          <option value="1">True</option>
        </Select>

        {/* <PermissionsFormControl permissions={permissions} /> */}
        <RolesFormControl roles={rolesNames} />

        <div className='grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4'>
          <Cta element='button' type='reset' className='px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent' variant='outline'>Reset</Cta>
          <Cta disabled={isSubmitting} element='button' type='submit' className='px-4 sm:px-8 py-2 rounded-lg font-medium'>{isSubmitting ? 'Creating admin user': 'Create admin user'}</Cta>
        </div>
      </Form>
    </main>
  )
}
