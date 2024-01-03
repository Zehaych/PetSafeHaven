import { Navlink } from "../Navbar/NavbarElement";

const AdoptList = ({dogs}) => {

    return(
        <div className = "dog-list">
            {dogs.map((dog)=>(
                <div className ="dog-preview" key ={dog.objectId}>
                    <h2 style = {{padding: "10px"}}> {dog.title}</h2>
                    <img src ={dog.url} alt = ""/>
                    <h3>More about them:</h3>
                    <p>Name: {dog.Name} </p>
                    <p>Breed: {dog.Breed}</p>
                    <Navlink className= "btn" to = "/procedure" activeStyle> Adopt Me! </Navlink>
                </div>
            ))}
        </div>
    );
}

export default AdoptList