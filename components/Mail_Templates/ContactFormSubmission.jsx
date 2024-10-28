export default function ContactFormSubmission({ name, lastName, email, message }) {
    return (
        <div>
            <h2>The Form was submitted by</h2>
            <p>{name} {lastName}</p>
            <h2>Email:</h2>
            <p>{email}</p>
            <h2>Message:</h2>
            <p>{message}</p>
        </div>
    )
}