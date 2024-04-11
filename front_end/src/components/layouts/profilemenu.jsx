import { useContext, useState } from "react";
import {
    Button,
    Menu, MenuHandler, MenuList, Avatar,
    ListItem, ListItemPrefix

} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    PowerIcon,
    ArrowRightCircleIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function ProfileMenu() {
    let { user, logoutUser } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1  py-0.5 pr-2 pl-0.5 "
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {!user && (
                    <>
                        <ListItem className="hover:bg-gray-200">
                            <ListItemPrefix>
                                <ArrowRightCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Link to="/signin"> Sign in </Link>
                        </ListItem>
                        <ListItem className="hover:bg-gray-200">
                            <ListItemPrefix>
                                <PencilSquareIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Link to="/signup">Sign up </Link>
                        </ListItem>
                    </>
                )}
                {user && (
                    <>
                        <ListItem className="hover:bg-gray-200">
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Link>Profile</Link>
                        </ListItem>
                        <ListItem className="hover:bg-gray-200">
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Setting
                        </ListItem>
                        <ListItem className="hover:bg-gray-200">
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>

                            <Link to="/" onClick={logoutUser} className=" text-red-500 font-bold">Sign Out</Link>

                        </ListItem>
                    </>
                )}
            </MenuList>
        </Menu>
    );
}