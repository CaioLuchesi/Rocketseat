interface RepositoryItemProps {
   respository: {
       name: string,
       description: string,
       html_url: string,
   }
}

export function RepositoryItem(props: RepositoryItemProps){
    return (
        <li>
            <strong> {props.respository?.name ?? 'Default'}</strong>
            <p>{props.respository?.description}</p>
            <a href={props.respository?.html_url}>Acessar Repositório</a>
        </li>
    );
}