'use client';

import React from 'react';


import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import { TCustomer } from '@/models/customer';
import { deleteMe } from '@/services/me';
import eventLogs from '@/services/log';
import classNames from 'classnames';

export default function Menu({ data }: { data: TCustomer }) {

  const handleDelete = async () => {
    await eventLogs(
      {
        user_id: Number(data.id),
        email: data.email,
        event_type: 'logout',
      }
    )
    await deleteMe()
    signOut();
  }
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src:  '/image.png',
          }}
          onClick={() => {
          }}
          className="transition-transform"
          description={data?.email}
          name={data && `${data?.name} ${data?.surname}`}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        {data && (
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue="profile"
          >
            <p className="font-bold">logado como</p>
            <p className="font-bold">
              {data && `${data?.name} ${data?.surname}`}
            </p>
          </DropdownItem>
        )}
        <DropdownItem
          as="a"
          href={data ? '/perfil' : '/login'}
          key="perfil"
        >
          {data ? 'Meu Perfil' : 'Login'}
        </DropdownItem>
         <DropdownItem className={classNames([Number(data?.id) !== 13 ? 'hidden' : 'block'])} href='/perfil/logs'>
           Logs
        </DropdownItem>
        <DropdownItem
          textValue="path"
          as="a"
        
          href={data ? '/perfil/editar' : '/cadastro'}
          key="path"
        >
          {data ? 'Editar perfil' : 'Cadastrar'}
        </DropdownItem>

        {data && (
          <DropdownItem
            textValue="logout"
            key="logout"
            color="danger"
            onClick={() => {
              handleDelete()
              
            }}
          >
            Sair
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
