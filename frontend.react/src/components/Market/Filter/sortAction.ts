const sortAction: { [key: string]: { attribute: string; direction: string } } = {
  Newest: { attribute: 'startDate', direction: 'DESC' },
  Oldest: { attribute: 'startDate', direction: 'ASC' },
  'Most Viewed': { attribute: '', direction: '' },
  'Most Favorited': { attribute: '', direction: '' },
  'Price : Low to High': { attribute: 'listPrice', direction: 'ASC' },
  'Price : High to Low': { attribute: 'listPrice', direction: 'DESC' },
}

export default sortAction
