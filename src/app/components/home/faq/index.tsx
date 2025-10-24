'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'
import { faqList } from '@/data'

function Faq() {

  return (
    <section id='faq'>
      <div className='section-spacing'>
        <div className='container'>
          <div className='flex flex-col gap-6 md:gap-12'>
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
                {faqList.map((item:any, index:any) => (
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
