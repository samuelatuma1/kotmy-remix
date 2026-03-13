import RoundCta from '~/components/reusables/RoundCta'
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from '@remix-run/react'
import { icons } from '~/assets/icons'
import FormControl from '~/components/reusables/FormControl'
import Select from '~/components/reusables/Select'
import Cta from '~/components/reusables/Cta'
import PermissionsFormControl from '~/components/admin/PermissionsFormControl'
import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { adminUsers, permissions } from '~/lib/data/admin'
import { setToast } from '~/lib/session.server'
import RolesFormControl from '~/components/admin/RolesFormControl'
import { adminRepo } from '~/services/admin/admin.server'
import { IUpdateAdminDto, IUpdateAdminUser } from '~/services/admin/types/admin.interface'
import { ILoginResponseDTO } from '~/services/auth/types/auth.dtos'
import { useEffect } from 'react'
import { toast } from '~/components/reusables/use-toast'

export async function loader({ params, request }: LoaderFunctionArgs) {
   const cookieHeader = request.headers.get("Cookie");
    if (!cookieHeader) return redirect("/login");
    
    const rolesResponse = await adminRepo.getAllRoles(cookieHeader);
    if(rolesResponse.authRequired) return redirect("/login");

    const userId = params.userId ?? ""
    const user = await adminRepo.getAdminUser(cookieHeader, userId);



  // const user = adminUsers.find(user => user._id == params.userId)
  if (!user || !user.data) {
    const { headers } = await setToast({ request, toast: `error::Admin user not found::${Date.now()}` })
    return redirect('/admin/accounts', { headers })
  }
  return { permissions, user: user.data, roles: rolesResponse.data }
}

export async function action({ params, request }: ActionFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return redirect("/login");
  const formData = await request.formData()

  const userId = params.userId ?? ""
  let dto: IUpdateAdminUser = {
        fullName: `${formData.get("firstName") as string} ${formData.get("lastName") as string}`,
        email: formData.get("email") as string,
        // password:formData.get("password") as string,
        has_admin_access: formData.get("has_admin_access") == "1"? true : false,
        is_superuser: false,
        is_staff:formData.get("is_staff") == "1"? true : false,
        is_active : formData.get("is_active") == "1"? true : false,
        username: formData.get("username") as string,
        roles: formData.getAll('role') as string[] ?? []
    }
  
    const response = await adminRepo.updateAdminUser(cookieHeader, userId, dto);


  console.log(...formData, dto)

  console.log(formData.getAll('permission'))
  // const { headers } = await setToast({ request, toast: `success::User updated  successfully::${Date.now()}` })

  return response;
  // return redirect('/admin/accounts', { headers })
}

export default function EditAdminUser() {
  const { permissions, user, roles } = useLoaderData<typeof loader>()

  const rolesNames: string[] = []
  for(const roleName in roles ?? []){
    rolesNames.push(roleName);
  }
  const navigate = useNavigate()


  const actionData = useActionData<{ data?: ILoginResponseDTO; error?: any }>();
    useEffect(() => {
      if (actionData?.error) {
        console.log(actionData.error)
        toast({
          variant: "destructive",
          title: "Create action failed",
          description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update admin user!",
        });
      }
      if (actionData?.data) {
        toast({
          variant: "default",
          title: "Create admin successful",
          description: "Admin account was successfully updated!",
        });
      }
    }, [actionData]);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
    <main className='w-full overflow-y-auto p-6'>
      <div className="flex items-center mb-10 sm:mb-16 gap-4">
        <RoundCta icon={icons.arrowPrevIcon} className="hover:bg-[#F7F7F8] text-primary" onClick={() => navigate(-1)} />
        <h1 className="text-2xl font-black text-primary">Edit User</h1>
      </div>
      <Form className='sm:wrapper grid sm:grid-cols-2 gap-3 sm:gap-6 text-sm' method='post'>
        <FormControl as='input' labelText='First Name' className='' placeholder='Enter first name' id='firstName' name='firstName' defaultValue={user.full_name.split(' ')[0]} required />
        <FormControl as='input' labelText='Last Name' className='' placeholder='Enter last name' id='lastName' name='lastName' defaultValue={user.full_name.split(' ')[1]} required />
        <FormControl as='input' labelText='Email Address' className='' placeholder='Enter email address' id='email' name='email' defaultValue={user.email} required />
        <FormControl as='input' labelText='Username' className='' placeholder='Enter username' id='username' name='username' defaultValue={user.username} required />
        
        <Select label='Assigned as Staff' id='is_staff' name='is_staff' defaultValue={user.is_staff ? "1" : "0"} required>
        <option value="0">False</option>
        <option value="1">True</option>
      </Select>

      <Select label='Set Active' id='is_active' name='is_active' defaultValue={user.is_active ? "1" : "0"} required>
        <option value="0">De-activate</option>
        <option value="1">Activate</option>
      </Select>
      
       <Select label='Has Admin Access' id='has_admin_access' name='has_admin_access' defaultValue={user.has_admin_access ? "1" : "0"} required>
        <option value="0">False</option>
        <option value="1">True</option>
      </Select>
        

        {/* <PermissionsFormControl permissions={permissions} defaultPermissions={user.permissions} /> */}
        <RolesFormControl roles={rolesNames} defaultRoles={user.roles} />

        <div className='grid grid-cols-2 sm:flex justify-end gap-3 sm:gap-6 sm:col-span-2 mt-4'>
          <Cta element='button' type='reset' className='px-4 sm:px-8 py-2 rounded-lg font-medium border-secondary active:border-accent' variant='outline'>Reset</Cta>
          
          
           <Cta disabled={isSubmitting} element='button' type='submit' className='px-4 sm:px-8 py-2 rounded-lg font-medium'>{isSubmitting ? 'Updating admin user': 'Update admin user'}</Cta>
        </div>
      </Form>
    </main>
  )
}
