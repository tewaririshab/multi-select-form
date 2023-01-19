

type EmailData = {
    email: string
}

type PasswordData = {
    password: string
}
interface EmailFormProps extends EmailData {
    updateFormFields: (fields: EmailData) => void
}

interface PasswordFormProps extends PasswordData {
    updateFormFields: (fields: PasswordData) => void
}


export function EmailForm({
    email,
    updateFormFields,
}: EmailFormProps) {
    return (
        <div style={{ border: "1px solid black", marginBottom: "20px", padding: "10px" }}>
            <h1 style={{ margin: "5px" }}>Email Please</h1>
            <div style={{ margin: "5px" }}>
                <label>Email :</label>
                <input
                    autoFocus
                    required
                    type="text"
                    value={email}
                    onChange={e => updateFormFields({ email: e.target.value })}
                />
            </div>
        </div >
    )
}

export function PasswordForm({
    password,
    updateFormFields,
}: PasswordFormProps) {
    return (
        <div style={{ border: "1px solid black", marginBottom: "20px", padding: "10px" }}>
            <h1 style={{ margin: "5px" }}>Passoword Please</h1>
            <div style={{ margin: "5px" }}>
                <label>Password :</label>
                <input
                    autoFocus
                    required
                    type="password"
                    value={password}
                    onChange={e => updateFormFields({ password: e.target.value })}
                />
            </div>
        </div>
    )
}