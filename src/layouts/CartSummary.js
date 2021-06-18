import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>bilgisayar</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}
