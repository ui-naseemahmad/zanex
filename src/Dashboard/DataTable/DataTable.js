import DataTable from 'react-data-table-component';

import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Heading from "../../Heading"
import DataTableExtensions from "react-data-table-component-extensions";
import 'react-data-table-component-extensions/dist/index.css';
import "./DataTable.css"

const columns = [
   {
      name: 'S.NO',
      maxWidth: "40px",
      selector: row => row.srno,
   },
   {
      name: 'NAME',
      grow: 2,
      selector: row => row.name,
   },
   {
      name: 'DATE',
      selector: row => row.date,
   },
   {
      name: 'AMOUNT',
      selector: row => row.amount,
   },
   {
      name: 'STATUS',
      selector: row => row.status,
   },
   {
      name: 'ACTIION',
      selector: row => row.action,
   }
];

const data = [
   {
      id: 1,
      srno: '01',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/11.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jack Poole</h5>
               <span>jack123@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 2,
      srno: '02',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/1.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Virginia Gray</h5>
               <span>virginiagray456@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 3,
      srno: '03',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/12.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jacob Thomson</h5>
               <span>jacobthomson@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$1,56,354',
      status: <div className='text-primary'>Pending</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 4,
      srno: '04',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/13.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Trevor Thomson</h5>
               <span>trevor@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$12.3',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 5,
      srno: '05',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/2.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Kylie north</h5>
               <span>kylie@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 6,
      srno: '06',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/1.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Virginia Gray</h5>
               <span>virginiagray456@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 7,
      srno: '07',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/12.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jacob Thomson</h5>
               <span>jacobthomson@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$1,56,354',
      status: <div className='text-primary'>Pending</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 8,
      srno: '08',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/13.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Trevor Thomson</h5>
               <span>trevor@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$12.3',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 9,
      srno: '09',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/11.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jack Poole</h5>
               <span>jack123@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 10,
      srno: '10',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/1.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Virginia Gray</h5>
               <span>virginiagray456@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 11,
      srno: '11',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/12.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jacob Thomson</h5>
               <span>jacobthomson@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$1,56,354',
      status: <div className='text-primary'>Pending</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 12,
      srno: '12',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/13.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Trevor Thomson</h5>
               <span>trevor@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$12.3',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 13,
      srno: '13',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/2.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Kylie north</h5>
               <span>kylie@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 14,
      srno: '14',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/1.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Virginia Gray</h5>
               <span>virginiagray456@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$5.321.2',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 15,
      srno: '15',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/12.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Jacob Thomson</h5>
               <span>jacobthomson@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$1,56,354',
      status: <div className='text-primary'>Pending</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   },
   {
      id: 16,
      srno: '16',
      name:
         <div className='table-Name'>
            <div className='table-Name__img'>
               <img src="https://spruko.com/demo/zanex/zanex/assets/images/users/13.jpg" alt="img" />
            </div>
            <div className='table-userInfo'>
               <h5>Trevor Thomson</h5>
               <span>trevor@gmail.com</span>
            </div>
         </div>,
      date: '20-11-2020',
      amount: '$12.3',
      status: <div className='text-success'>Success</div>,
      action:
         <div className='actionsIcon'>
            <span className='actionsIcon--edit'><BiEditAlt /> </span>
            <span className='actionsIcon--delete'><RiDeleteBin5Line /></span>
         </div>
   }
]

function Table() {
   const tableDatas = {
    columns,   data
   };
   return (
      <>

         <Heading title="Product Sales" className="table-heading" />
      
           <DataTableExtensions {...tableDatas}>
            <DataTable 
                columns={columns}
                data={data}
                noHeader
                defaultSortField="id"
                defaultSortAsc={false}
                striped={true}
                center={true}
                persistTableHead
                pagination
                highlightOnHover />
        </DataTableExtensions>
      </>
   );
};

export default Table;