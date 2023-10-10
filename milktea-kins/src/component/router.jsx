const itemsPerPage = 10;
const totalPages = Math.ceil(products.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedProducts = products.slice(startIndex, endIndex);
