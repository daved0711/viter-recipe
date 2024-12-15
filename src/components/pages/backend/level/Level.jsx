import { Plus } from 'lucide-react'
import React from 'react'
import Header from '../partials/Header'
import Searchbar from '../partials/Searchbar'
import Footer from '../partials/Footer'
import SideNavigation from '../partials/SideNavigation'

import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd } from '@/components/Store/storeAction'
import ModalAddLevel from './ModalAddLevel'
import ToastSuccess from '../partials/ToastSuccess'
import ModalError from '../partials/modals/ModalError'
import ModalValidation from '../partials/modals/ModalValidation'
import LevelTable from './LevelTable'




const Level = () => {
    const { dispatch, store} = React.useContext(StoreContext);
    const [ itemEdit,setItemEdit] = React.useState(null);
    const handleAdd = () => {dispatch(setIsAdd(true));
        setItemEdit(null);
    }
  return (
    <>
      <section className='layout-main '>
        <div className=" layout-division ">
       <SideNavigation menu="level"/>
            <main className=''>
               <Header title='Level' subtitle='Manage Kiosk Level'/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add' onClick={handleAdd} >
                           <Plus size={16}/> Add New 
                        </button>
                    </div>  
                    <LevelTable setItemEdit ={setItemEdit} />
                </div>
                <Footer/>
            </main>
        </div>
    </section>
    {store.validate && <ModalValidation/> }
    {store.error && <ModalError/>}
     {store.success && <ToastSuccess/>}
    {/* {store.isView && <SpinnerWindow/>} */}
    {store.isAdd && <ModalAddLevel itemEdit = {itemEdit}/>}
    </>
  )
}

export default Level
