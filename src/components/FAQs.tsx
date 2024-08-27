import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     <h2 className="text-4xl mb-8 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        FAQs
        </h2>
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why should I upgrade to Tapped AI Premium?</AccordionTrigger>
        <AccordionContent>
          Upgrading to Tapped AI Premium unlocks a suite of advanced features designed to significantly enhance your booking and touring capabilities. With Premium, you gain:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Unlimited access to in-depth analytics</li>
            <li>Comprehensive data sets</li>
            <li>Sophisticated booking tools that streamline the planning process</li>
            <li>Exclusive insights into venue performance and audience preferences</li>
            <li>Priority customer support</li>
            <li>Regular updates with the latest industry trends and data enhancements</li>
          </ul>
          This ensures you have a competitive edge in the music industry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How much does the monthly subscription cost?</AccordionTrigger>
        <AccordionContent>
          The monthly subscription for performers costs:
          <ul className="list-disc list-inside mt-2">
            <li>$10 on desktop</li>
            <li>$12.99 on the app store</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time. Upon cancellation:
          <ul className="list-disc list-inside mt-2">
            <li>Your subscription will remain active until the end of the current billing period</li>
            <li>You will still have access to the subscribed features until the end of your billing cycle</li>
            <li>After the billing cycle ends, the subscription will terminate automatically</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Is there a tutorial on how to use Tapped AI?</AccordionTrigger>
        <AccordionContent>
          Yes! We have a video tutorial from our founder Johannes Naylor. You can:
          <ul className="list-disc list-inside mt-2">
            <li>Scroll up on this page to view the tutorial</li>
            <li>Visit our YouTube page for more videos</li>
          </ul>
          <Button variant="outline" className="mt-4" asChild>
            <a href="https://www.youtube.com/@TappedAi_" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              Visit our YouTube page
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