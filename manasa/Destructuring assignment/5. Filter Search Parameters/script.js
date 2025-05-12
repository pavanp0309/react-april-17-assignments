function filterSearch(searchParams){
const {query, page}= searchParams;
console.log("Query:",query)
console.log("Page:",page)
}

const searchParams={query:'HTML', page:1}
filterSearch(searchParams)