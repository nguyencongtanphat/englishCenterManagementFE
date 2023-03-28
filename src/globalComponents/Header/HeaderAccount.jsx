import React from 'react'

export default function HeaderAccount() {
  return (
    <div>
           {/* <div class="dropdown">
            <button class="btn btn-primary" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div> */}

        <div class="dropdown">
            <button class="btn bg-dark dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false" 
                style={{width: "100px", height: "46px", fontWeight: "600", borderRadius: "24px"}}>
                <span style={{marginRight: "2px"}}> Admin </span>
            </button>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <a class="dropdown-item" href='#'>Edit</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href='#'>Log out</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href='#'>Info</a>
                        </li>
                    </ul>
                </div>
    </div>
  )
}
