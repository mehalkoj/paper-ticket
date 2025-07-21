

export default function Login({ action }: { action: (formData: FormData) => void}) {
    return(
        <section>
            <form action={action}>
                <input type="email" placeholder="Email" />
                <br />
                <button type="submit">Login</button>
            </form>
        <form action={action}>
          <button type="submit">Logout</button>
        </form>

            
        </section>
    )
}