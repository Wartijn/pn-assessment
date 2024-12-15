import { MenuItem } from "@/utils/types";

export default async function CategoryMenuItem({category}: {category: MenuItem}){
    return <>
        <h1>{category.name}</h1>
    </>

}
