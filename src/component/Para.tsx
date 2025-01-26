import { TextReveal } from "@/components/ui/text-reveal";



function Para() {
    const words = `We created this platform to bridge the knowledge gap for manual testers. Whether you're preparing for an interview or improving your skills, we've got you covered.`;

    return (
    <div className="h-[40vw] p-28">
        <div> 
            <TextReveal text={words} />
        </div>
    </div>
  )
}

export default Para;
