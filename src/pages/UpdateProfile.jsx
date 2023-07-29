import Form from "../components/Form"
export default function Registration() {
    return(
        <div>
        
            <Form
                username="true"
                password="true"
                firstName="true"
                lastName="true"
                email="true"
                confirmPassword="true"
            />
        </div>
    )
}