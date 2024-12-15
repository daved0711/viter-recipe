import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'
import useQueryData from '@/components/custom-hook/useQueryData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import IconNoData from '../partials/IconNoData'
import IconServerError from '../partials/IconServerError'
import Status from '../partials/Status'
import ModalDelete from '@/components/partials/modal/ModalDelete'
import ModalArchive from '@/components/partials/modal/ModalArchive'
import ModalRestore from '@/components/partials/modal/ModalRestore'
import TableLoader from '@/components/partials/TableLoader'






const CategoryTable = ({setItemEdit}) => {
  const {store, dispatch } = React.useContext(StoreContext);
  const [isActive, setIsActive] = React.useState(0);
  const [id, setId] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category"
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.category_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.category_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.category_aid);
  };

 
  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative'>
            {!isLoading || (isFetching && <SpinnerTable />)}{" "}
                      <div className="table-wrapper custom-scroll">
                        
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th className='w-[50%]'>Title</th>
                            
                             
                            
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                          {/* {((isLoading && !isFetching) || result?.data.length === 0) && (
                                <tr>
                                  <td colSpan="100%">
                                    {isLoading ? (
                                      <TableLoader count={30} cols={6} />
                                    ) : (
                                      <IconNoData />
                                    )}
                                  </td>
                                </tr>
                              )}
                           
                           {error && (
                                <tr>
                                  <td colSpan="100%">
                                    <IconServerError />
                                  </td>
                                </tr>
                              )} */}
                              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.category_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td>{item.category_title}</td>
                    <td>
                      <ul className="table-action ">
                        {item.category_is_active === 1 ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                              >
                                <Archive onClick={() => handleArchive(item)} />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                              >
                                <ArchiveRestore
                                  onClick={() => handleRestore(item)}
                                />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
                              

                          </tbody>
                        </table>
                        <LoadMore/>
                      </div>
                      </div>
                  
                    {store.isDelete && <ModalDelete setIsDelete={setIsDelete} mysqlApiDelete={`/v2/category/${id}`}queryKey="category"/>}

                    {store.isRestore && <ModalRestore setIsRestore={setIsRestore} mysqlEndpoint={`/v2/category/active/${id}`}queryKey="category"/>}

                    {store.isArchive && <ModalArchive setIsArchive={setIsArchive} mysqlEndpoint={`/v2/category/active/${id}`} queryKey="category"/>}
                
                    
                     </>
  )
 
}

export default CategoryTable