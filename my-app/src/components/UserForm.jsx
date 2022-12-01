import {
    Card,
    CardTitle,
    SubTitle,
    HrLine
} from './userForm.style'

export default function UserForm(props) {
    return (
        <Card>
            <CardTitle>{props.title}</CardTitle>
            <SubTitle>{props.subtit}</SubTitle>
            <HrLine/>
            {props.children}
        </Card>
    )
}
