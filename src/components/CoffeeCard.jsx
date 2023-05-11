import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

  const handleDelete = (id) =>{
    console.log(id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaning = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaning);
          }
        })
      }
    })

  }

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div>
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
        </div>
        <div className="card-actions justify-end flex flex-col">
          <button className="btn btn-primary">View</button>
          <Link to={`updateCoffee/${_id}`}><button className="btn btn-primary">Edit</button></Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
