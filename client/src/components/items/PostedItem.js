import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemContext from '../../context/item/itemContext';

// Material UI Imports
import { Button, Card, Typography } from '@material-ui/core/'

const PostedItem = ({ item }) => {
	const itemContext = useContext(ItemContext);
	const { deleteItem, setCurrent, clearCurrent } = itemContext;

	const { _id, name, email, type, location, description } = item;

	const onDelete = () => {
		deleteItem(_id);
		clearCurrent();
	};

	return (
		<Card className='card'>
			<Typography variant='h3' className='text-success text-left'>
				{name}{' '}
				<span
					style={{ float: 'right' }}
					className={
						'badge ' +
						(type === 'found' ? 'badge-default' : 'badge-danger')
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span></Typography>

			<ul className='list'>
				<span className='text-dark'> Color:</span>{email && (
					<li>
						{email}
					</li>
				)}
				<span className='text-dark'> Location:</span>{location && (
					<li>
						{location}
					</li>
				)}
				<span className='text-dark'> Description:</span>{description && (
					<li>
						{description}
					</li>
				)}
			</ul>
			<p>
				<Button
					onClick={() => setCurrent(item)}
					style={{backgroundColor: '#152b51', color: 'white'}}
				>
					Edit
        		</Button>
				<Button  
					onClick={onDelete}
					style={{backgroundColor: '#F6511D', color: 'white', marginLeft: '0.5rem'}}>
					Delete
        		</Button>
			</p>
		</Card>
	);
};

PostedItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default PostedItem;
