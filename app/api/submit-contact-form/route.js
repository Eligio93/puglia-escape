import ContactFormSubmission from "@/components/Mail_Templates/ContactFormSubmission";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const requestBody = await request.json();
    const { name, lastName, email, message } = requestBody;
    try {
        const { data, error } = await resend.emails.send({
            from: 'From Puglia Contact Form <hello@frompuglia.com>',
            to: ['hello@frompuglia.com'],
            subject: 'Contact Form Submission',
            react: ContactFormSubmission({ name, lastName, email, message })
        });
        if (error) {
            return Response.json(error, { status: 500 })
        }
        return Response.json(data)
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}
