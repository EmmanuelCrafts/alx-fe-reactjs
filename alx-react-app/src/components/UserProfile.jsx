export default function UserProfile(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>age: {props.age}</p>
            <p>bio: {props.bio}</p>
        </div>
    );
}