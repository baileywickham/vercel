import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/shadcn/ui/dialog';

const ShadDialogDemo = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="border-2 border-black p-2">Open ShadCN Modal</button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<label htmlFor="link" className="sr-only">
							Link
						</label>
						<input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
					</div>
					<button type="submit" size="sm" className="px-3">
						<span className="sr-only">Copy</span>
					</button>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<button type="button">Close</button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
export default ShadDialogDemo;
