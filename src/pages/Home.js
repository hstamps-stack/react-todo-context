import InputComponent from '../components/InputComponent';
import ListItem from '../components/ListComponent';

const HomePage = () =>{
 return(
     <div>
         <h1 className="font-weight-bold">Todo List</h1>
         <InputComponent/>
         
        <ListItem/>
     </div>
 )
}

export default HomePage;