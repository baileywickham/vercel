import * as Dialog from '@radix-ui/react-dialog';

import * as DialogCustom from './components/primitives/dialog';

const DialogDemo = () => {
	return (
		<Dialog.Root>
			<DialogCustom.Trigger asChild>
				<button className="border-2 border-black p-2">Open Radix Modal</button>
			</DialogCustom.Trigger>
			<Dialog.Portal>
				<DialogCustom.Overlay />
				<Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-96 -translate-x-1/2 -translate-y-1/2 space-y-5 rounded-md bg-white px-8 py-6 drop-shadow-lg">
					<Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
					<Dialog.Description className="DialogDescription">
						Make changes to your profile here. Click save when your are done.
					</Dialog.Description>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="name">
							Name
						</label>
						<input className="Input" id="name" defaultValue="Pedro Duarte" />
					</fieldset>
					<fieldset className="Fieldset">
						<label className="Label" htmlFor="username">
							Username
						</label>
						<input className="Input" id="username" defaultValue="@peduarte" />
					</fieldset>
					<div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
						<Dialog.Close asChild>
							<button className="Button green">Save changes</button>
						</Dialog.Close>
					</div>
					<Dialog.Close asChild>
						<button className="IconButton" aria-label="Close">
							Icon
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default DialogDemo;
