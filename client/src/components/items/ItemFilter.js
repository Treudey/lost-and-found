import React, { useContext, useRef, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

// Material UI Imports
import { Card, CardContent, Container, Input } from '@material-ui/core/'

//Import Universal Styles
import '../../App.css'

const ItemFilter = () => {
    const itemContext = useContext(ItemContext);
    const text = useRef('');

    const { filterItems, clearFilter, filtered } = itemContext;


    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            filterItems(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <Container className="itemContainer">
            <Card>
                <CardContent>
                    <form>
                        <Input
                            fullWidth
                            ref={text}
                            type='text'
                            placeholder='Lookup your posting here'
                            onChange={onChange}
                        />
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ItemFilter;
