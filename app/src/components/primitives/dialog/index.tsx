import * as React from 'react';
import * as DialogPrimative from '@radix-ui/react-dialog';
import { cn } from 'src/lib/styling';

const Trigger = React.forwardRef<
	React.ElementRef<typeof DialogPrimative.Trigger>,
	React.ComponentPropsWithoutRef<typeof DialogPrimative.Trigger>
>((props, forwardedRef) => <DialogPrimative.Trigger {...props} ref={forwardedRef} />);
Trigger.displayName = 'DialogTrigger';

const Overlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimative.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimative.Overlay>
>(({ className, ...restProps }, forwardedRef) => {
	return (
		<DialogPrimative.Overlay
			className={cn(`fixed inset-0 z-40 h-screen w-screen bg-gray-900 bg-opacity-60`, className)}
			ref={forwardedRef}
			{...restProps}
		/>
	);
});
Overlay.displayName = 'DialogOverlay';

export { Overlay, Trigger };
