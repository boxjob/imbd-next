import NavbarItem from "./NabarItem";

const Navbar = () => {
    return (
        <div className="flex dark:bg-gray-400 bg-white p-4 lg:text-lg justify-center gap-4">
            <NavbarItem title='Trending' param='fetchTrending' />
            <NavbarItem title='Top Rated' param='fetchTopRated' />
        </div>
    );
}
 
export default Navbar;