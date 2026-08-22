import { ActionFunctionArgs, json } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { useEffect } from 'react'
import ContactForm from '~/components/public/landingpage/ContactForm'
import WhyCard from '~/components/public/landingpage/WhyCard'
import Button from '~/components/reusables/Button'
import Svg from '~/components/reusables/Svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/reusables/Accordion'
import { icons } from '~/assets/icons'
import { whyUsData } from '~/lib/data/landingPage.data'
import ContestantSlider from '~/components/public/ContestantSlider'
import {
    birthdayPresent, hero1, hero2,
    hero3, hero4, hero5, underline
} from '~/assets/images'
import SponsorsSlider from '~/components/public/landingpage/SponsorsSlider'
import { useToast } from '~/components/reusables/use-toast'
import { userServer } from '~/services/user/userserver'

type ContactActionData = {
    error?: string
    success?: boolean
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()
    const payload = {
        email: String(formData.get('email') ?? ''),
        full_name: String(formData.get('full_name') ?? ''),
        subject: String(formData.get('subject') ?? ''),
        message: String(formData.get('message') ?? ''),
    }

    const { data, error } = await userServer.submitContact(payload, request)

    if (error) {
        const detail = Array.isArray(error.detail)
            ? error.detail.map(item => item.msg).join(', ')
            : error.detail

        return json<ContactActionData>({ error: detail || 'Unable to send your message.' }, { status: 400 })
    }

    return json<ContactActionData>({ success: data === true })
}
 

export default function LandingPage() {
    const actionData = useActionData<typeof action>()
    const { toast } = useToast()

    useEffect(() => {
        if (actionData?.error) {
            toast({
                variant: 'destructive',
                title: 'Message not sent',
                description: actionData.error,
            })
        }

        if (actionData?.success) {
            toast({
                title: 'Message sent',
                description: 'Thanks for reaching out. We will get back to you soon.',
            })
        }
    }, [actionData, toast])

    const trustBadges = [
        'Safe & Secure Platform',
        'Transparent Competition Process',
        'Verified Rewards',
        'Family-Focused Experience',
    ]

    const faqItems = [
        {
            question: 'Who can participate in KidMonth competitions?',
            answer: 'Children and families looking to join KidMonth contests, talent experiences and related opportunities can participate through the platform.',
        },
        {
            question: 'What age groups are eligible?',
            answer: 'KidMonth is open to children aged 0-16 years.',
        },
        {
            question: 'Is registration free?',
            answer: 'Yes. Registration is free, making it easy for families to get started and explore opportunities on KidMonth.',
        },
    ]

    return (
        <main className='snap-y'>
            <section className='wrapper flex flex-col md:flex-row gap-16 xl:gap-24 md:items-center py-8 md:py-16'>
                <div className='flex flex-col gap-6 sm:gap-8'>
                    <h1 className='font-black text-4xl sm:text-5xl xl:text-[64px] leading-tight sm:leading-snug'>
                        Discover. Celebrate. Reward.
                        <br />
                        Every Child Deserves Their <span className='text-accent'>Moment.</span>
                    </h1>
                    <p className='text-xl'>KidMonth is Nigeria&apos;s leading platform celebrating children&apos;s talents, creativity and achievements through exciting competitions, rewarding experiences, talent development and our growing family marketplace. Open to children aged 0-16 years.</p>
                    <div className='flex gap-4 flex-wrap'>
                        <Button element='a' href={'/signup'} className='w-full sm:w-auto'>Register Free</Button>
                        <Button element='a' href='/contests' className='w-full sm:w-auto' variant='outline'>Explore Competitions</Button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-8 xl:gap-9 w-full'>
                    <div className='flex flex-col gap-8 xl:gap-9'>
                        <img className='aspect-3/7 object-cover rounded-full outline-dashed outline-offset-4 w-full' src={hero1} alt="competition winner smiling" />
                        <img className='aspect-3/4 rounded-full outline-dashed outline-offset-4 object-cover w-full' src={hero2} alt="child receiving a prize" />
                    </div>
                    <div className='flex flex-col gap-8 xl:gap-9 justify-center'>
                        <img className='aspect-square rounded-full outline-dashed outline-offset-4 object-cover w-full' src={hero3} alt="talent academy participant" />
                        <img className='aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full' src={hero4} alt="birthday celebration moment" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img className='aspect-3/7 rounded-full outline-dashed outline-offset-4 object-cover w-full' src={hero5} alt="family celebration photo" />
                    </div>
                </div>
            </section>
            
            <section className='wrapper py-8 md:py-16'>
                
                <h2 className='font-bold text-xl mb-4'>Why Parents Trust KidMonth</h2>
                <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                    {trustBadges.map(badge => (
                        <div key={badge} className='rounded-2xl border  bg-secondary px-5 py-6 font-semibold text-primary shadow-sm'>
                            {badge}
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-8 md:py-16'>
                <div className='sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl'>
                    <div className="wrapper">
                        <div className="mb-8">
                            <p className='font-black text-xl'>Our Vision</p>
                            <img className="object-cover object-center" src={underline} alt="underline" width={100} />
                        </div>
                        <h2 className='text-2xl sm:text-3xl font-black mb-6 leading-snug'>
                            Creating <span className="text-accent">Opportunities</span> Where Every Child Can Shine.
                        </h2>
                        <p className='font-medium'>KidMonth exists to discover, celebrate and reward children by creating exciting opportunities that build confidence, encourage creativity and bring families together through competitions, talent development and memorable experiences.</p>
                    </div>
                    <div className="wrapper">
                        <img className="object-cover object-center w-full" src={birthdayPresent} alt="wrapped gift" />
                    </div>
                </div>
            </section>

            {/* <section id="contests" className="contests-section">
                <Carousel responsive={responsiveData} arrows={false} partialVisible ssr={true}
                    renderButtonGroupOutside={true} customButtonGroup={<CarouselButtonGroup />}
                >
                    {contests
                        ? contests.map(contest => (
                            <ContestCarouselCard key={contest._id} contest={contest} />
                        ))
                        : <p className='f-s-5 f-w-6'>No active contests to display</p>
                    }
                </Carousel>
            </section> */}

            <section className='py-8 md:py-16 wrapper flex flex-col items-center'>
                <div className="mb-6 sm:mb-16">
                    <h2 className='font-satoshi-black text-2xl'>Why Kidmonth?</h2>
                    <img className="object-fill w-[159px] h-5" src={underline} alt="underline" />
                </div>
                <div className="grid gap-6 lg:gap-12 sm:grid-cols-2 max-w-5xl">
                    {whyUsData.map(item => (
                        <WhyCard key={item.title} backgroundColor={item.bg} icon={item.icon} title={item.title} subtext={item.subtext} />
                    ))}
                </div>
            </section>

            <section className='py-8 md:py-16'>
                <ContestantSlider contestants={[{ id: 'sdjc', image: hero1 }, { id: 'adcn', image: hero2 }, { id: 'kjsd', image: hero3 }]} />
            </section>

            <section className='pt-4 sm:py-8 md:py-16'>
                <div className='sm:wrapper bg-[#817EFB] bg-pattern bg-cover bg-left text-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between items-center gap-16 sm:rounded-3xl'>
                    <div className="wrapper">
                        <h2 className='text-2xl sm:text-[40px] font-satoshi-black mb-6 leading-snug'>
                            Invite Families. Earn Rewards.
                        </h2>
                        <p className='font-satoshi-medium mb-8'>
                            Join the KidMonth Affiliate Program and earn commissions by referring parents, contestants and businesses to the KidMonth ecosystem. The more families you introduce, the more you earn.
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            <Button element='a' href='/signup' variant={'none'} useDefault={false} className='bg-[#E7E7E7] text-primary py-4 px-8 text-lg rounded-md font-black whitespace-nowrap'>Become an Affiliate</Button>
                            <Button element='a' href='/faq' variant='none' useDefault={false} className='whitespace-nowrap'>Learn More</Button>
                        </div>
                    </div>
                    <div className="wrapper bg-[#E7E7E7] rounded-3xl w-full aspect-square">
                    </div>
                </div>
            </section>

            <section className='py-8 md:py-16'>
                <div className='wrapper'>
                    <div className='mb-6 sm:mb-10'>
                        <h2 className='font-satoshi-black text-2xl sm:text-[40px] mb-3'>Frequently Asked Questions</h2>
                        <img className='object-fill w-[220px] h-5' src={underline} alt='underline' />
                    </div>
                    <div className='max-w-4xl mx-auto'>
                        <Accordion type='single' collapsible className='w-full'>
                            {faqItems.map(item => (
                                <AccordionItem key={item.question} value={item.question} className='border-b border-primary/10'>
                                    <AccordionTrigger className='text-left py-5 text-lg font-semibold'>
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className='pb-5 text-primary/80'>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <section id='contact' className='sm:py-8 md:py-16 sm:-scroll-m-4 md:-scroll-m-8 snap-start'>
                <div className='sm:wrapper bg-secondary md:px-24 py-16 md:py-28 flex flex-col md:flex-row justify-between gap-16 sm:rounded-3xl'>
                    <div className="wrapper flex flex-col gap-12">
                        <h2 className='text-2xl sm:text-[40px] font-satoshi-black leading-tight'>
                            Do you want to know more about the way we work?
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <p>
                                <span className='block font-satoshi-black mb-3'>Phone Us</span>
                                <span className='font-satoshi-medium whitespace-nowrap'>+234 703 515 9093</span>
                            </p>
                            <p>
                                <span className='block font-satoshi-black mb-3'>Email Us</span>
                                <span className='font-satoshi-medium'>kidmonthyear@gmail.com</span>
                            </p>
                        </div>
                        <div>
                            <span className='block font-satoshi-black mb-3'>Follow Us</span>
                            <span className='flex gap-4'>
                                <Svg src={icons.twitterXIcon} width={'24px'} height={'24px'} />
                                <Svg src={icons.instagramIcon} width={'24px'} height={'24px'} />
                                <Svg src={icons.facebookIcon} width={'24px'} height={'24px'} />
                                <Svg src={icons.youtubeIcon} width={'24px'} height={'24px'} />
                            </span>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}
