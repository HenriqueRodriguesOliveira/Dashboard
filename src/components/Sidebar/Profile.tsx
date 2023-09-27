import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img
                src="http://github.com/krissafff.png"
                className="h-10 w-10 rounded-full"
                alt=""
            />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Henrique Rodrigues</span>
                <span className="truncate text-sm text-zinc-500">henrique_krf@outlook.com</span>
            </div>
            <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
                <LogOut className="w-5 h-5 text-zinc-500" />
            </button>
        </div>
    )
}