import { Fragment } from 'react';

export default function Navigation () {
    const links = ['Home', 'Seu negócio'];

    return (
        <nav className='flex'>
            <ul className="flex items-center">
                {links.map((link) => {
                    return (
                        <Fragment key={link}>
                            <li className='px-2'>
                                {link}  
                            </li>
                        </Fragment>
                    );
                })}
            </ul>
        </nav>
    );
}