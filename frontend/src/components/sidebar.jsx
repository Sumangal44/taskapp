import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, ListTodo } from "lucide-react";

export const navItems = [
	{ to: "/dashboard", label: "Dashboard", icon: Home },
	{ to: "/profile", label: "Profile", icon: User },
	{ to: "/tasks", label: "Tasks", icon: ListTodo },
];

export default function Sidebar() {
	return (
		<aside
			className="hidden md:block w-64 min-h-screen border-r bg-card p-4"
			aria-label="Primary"
		>
			<nav className="space-y-1" aria-label="Main navigation">
				{navItems.map(({ to, label,  }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							`flex items-center gap-3 p-2 rounded-md transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
								isActive
									? "bg-accent text-accent-foreground"
									: "hover:bg-accent"
							}`
						}
					>
						<span>{label}</span>
					</NavLink>
				))}
			</nav>
		</aside>
	);
}
