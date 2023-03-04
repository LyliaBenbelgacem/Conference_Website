
export default function ArticleSubmission() {
    return (
        <div class="container-works">
            <h1>Article Submission</h1>
            <form action="">
                <input name="FirstName" type="text" placeholder="First Name" required />
                <input name="LasttName" type="text" placeholder="Last Name" required />
                <input name="Email" type="email" placeholder="Email Adress" required />
                <input name="article" type="file" required />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}