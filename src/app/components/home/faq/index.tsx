'use client'
import { useEffect, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

function Faq() {
  const [faqList, setfaqList] = useState<any>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
  
          const data = await res.json()
          setfaqList(data?.faqList)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <section id='faq'>
      <div className='section-spacing'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-md text-center mx-auto'>
              <h2>
                Got questions? We’ve got{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  answers
                </span>
              </h2>
            </div>
            <div className='flex flex-col'>
              <Accordion
                type='single'
                collapsible
                defaultValue='item-0'
                className='flex flex-col gap-4'>
                {faqList?.map((item:any, index:any) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='p-4 border border-dark_black/10 dark:border-white/50 group'>
                    <AccordionTrigger className='group-hover:cursor-pointer'>
                      <p className='text-sm md:text-lg font-medium text-dark_black dark:text-white/80'>
                        {item.faq_que}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='text-base font-normal text-dark_black/60 dark:text-white/60'>
                        {item.faq_ans}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
