import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     <h2 className="text-4xl mb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        faqs
        </h2>
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>why should I upgrade to tapped ai premium?</AccordionTrigger>
        <AccordionContent>
          upgrading to tapped ai premium unlocks a suite of advanced features designed to significantly enhance your booking and touring capabilities. with premium, you gain:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>unlimited access to in-depth analytics</li>
            <li>comprehensive data sets</li>
            <li>sophisticated booking tools that streamline the planning process</li>
            <li>exclusive insights into venue performance and audience preferences</li>
            <li>priority customer support</li>
            <li>regular updates with the latest industry trends and data enhancements</li>
          </ul>
          this ensures you have a competitive edge in the music industry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>how much does the monthly subscription cost?</AccordionTrigger>
        <AccordionContent>
          the monthly subscription for performers costs:
          <ul className="list-disc list-inside mt-2">
            <li>$10 on desktop</li>
            <li>$12.99 on the app store</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>can I cancel my subscription at any time?</AccordionTrigger>
        <AccordionContent>
          yes, you can cancel your subscription at any time. upon cancellation:
          <ul className="list-disc list-inside mt-2">
            <li>your subscription will remain active until the end of the current billing period</li>
            <li>you will still have access to the subscribed features until the end of your billing cycle</li>
            <li>after the billing cycle ends, the subscription will terminate automatically</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>is there a tutorial on how to use tapped ai?</AccordionTrigger>
        <AccordionContent>
          yes! we have a video tutorial from our founder johannes naylor. you can:
          <ul className="list-disc list-inside mt-2">
            <li>scroll up on this page to view the tutorial</li>
            <li>visit our youTube page for more videos</li>
          </ul>
          <Button variant="outline" className="mt-4" asChild>
            <a href="https://www.youtube.com/@TappedAi_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              visit our youTube page
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  )
}

export default FAQs