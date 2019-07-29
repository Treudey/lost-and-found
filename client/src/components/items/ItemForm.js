import React, { useState, useContext, useEffect } from 'react';
import ItemContext from '../../context/item/itemContext';

//Material UI Imports
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from '@material-ui/core/'

//Import Universal Styles
import './style.css'
import '../../App.css'

const ItemForm = () => {
    const itemContext = useContext(ItemContext);

    const { addItem, updateItem, clearCurrent, current } = itemContext;
    const [value, setValue] = React.useState('lost');

    useEffect(() => {
        if (current !== null) {
            setItem(current);
        } else {
            setItem({
                name: '',
                email: '',
                type: 'lost',
                location: '',
                description: ''
            });
        }
    }, [itemContext, current]);

    const [item, setItem] = useState({
        name: '',
        email: '',
        type: 'lost',
        location: '',
        description: ''
    });

    const { name, email, type, location, description } = item;

    const onChange = e =>
        setItem({ ...item, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addItem(item);
        } else {
            updateItem(item);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <React.Fragment>
            <div className='formContainer'>
                <Container>
                    <Grid >
                        <Grid item md={12} sm={12} xs={12}>
                            <Card className="formCard">
                                <CardContent>
                                    <Typography variant='h2' className='text-primary'>{current ? 'Edit Item' : 'Add Item'}</Typography>
                                    <form validate autoComplete="off" onSubmit={onSubmit}>
                                        <Grid item md={12} sm={12} xs={12}>
                                            <TextField
                                                value={name}
                                                onChange={onChange}
                                                name='name'
                                                label='Item'
                                                helperText='Please tell us what you found or lost'
                                                fullWidth
                                                required
                                                aria-describedby="title-helper-text"
                                            />
                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12}>
                                            <TextField
                                                value={email}
                                                onChange={onChange}
                                                name='email'
                                                label='Color'
                                                helperText='Please tell us what color is the item'
                                                fullWidth
                                                required
                                                aria-describedby="item-helper-text"
                                            />
                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12}>
                                            <TextField
                                                value={location}
                                                onChange={onChange}
                                                name='location'
                                                label='location'
                                                helperText='Please tell us where you found it'
                                                fullWidth
                                                required
                                                aria-describedby="location-helper-text"
                                            />
                                        </Grid>

                                        <Grid item md={12} sm={12} xs={12}>
                                            <TextField
                                                value={description}
                                                onChange={onChange}
                                                name='description'
                                                label='description'
                                                helperText='Please give us more details'
                                                fullWidth
                                                required
                                                aria-describedby="description-helper-text"
                                            />
                                        </Grid>
                                        <Typography variant='h5' className='pt-1'>Item Type</Typography>
                                        <input
                                            type='radio'
                                            name='type'
                                            value='lost'
                                            checked={type === 'lost'}
                                            onChange={onChange}
                                        />{' '}
                                        Lost{' '}
                                        <input
                                            type='radio'
                                            name='type'
                                            value='found'
                                            onChange={onChange}
                                        />{' '}
                                        Found
                                         <div>
                                            <Button
                                                type='submit'
                                                fullWidth
                                                value={current ? 'Update Item' : 'Add Item'}
                                                style={{ backgroundColor: '#152b51', color: 'white' }}
                                                className='hover'
                                            >Add</Button>
                                        </div>
                                        {current && (
                                            <div>
                                                <Button
                                                    fullWidth
                                                    onClick={clearAll}
                                                    className='hover'
                                                    style={{ marginTop: '1rem', backgroundColor: '#FF9F1C', color: 'white' }}>
                                                    Clear
                                                </Button>
                                            </div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ItemForm;
