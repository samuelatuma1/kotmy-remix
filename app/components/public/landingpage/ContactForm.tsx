import { Form, useNavigation } from '@remix-run/react'
import FormControl from '../../reusables/FormControl'
import Button from '../../reusables/Button'

export default function ContactForm() {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <Form method="post" className="wrapper flex flex-col gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
                <FormControl as='input' labelText='Full Name' id='full_name' name='full_name'
                    placeholder='Enter your full name' required
                />
                <FormControl as='input' labelText='Email Address' id='email' name='email'
                    placeholder='Enter your email address' type='email' required
                />
            </div>
            <FormControl as='input' labelText='Subject' id='subject' name='subject'
                placeholder='Enter subject' required
            />
            <FormControl as='textarea' labelText='Message' id='message' name='message'
                placeholder='Enter your message here...' required
            />
            <Button element='button' type='submit' disabled={isSubmitting} className='md:self-end disabled:cursor-not-allowed disabled:opacity-60'>
                {isSubmitting ? 'Sending...' : 'Contact us'}
            </Button>
        </Form>
    )
}
