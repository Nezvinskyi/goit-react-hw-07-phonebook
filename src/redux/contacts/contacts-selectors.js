export const getIsLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

export const getFilteredSortedContacts = state => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts
    .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};
