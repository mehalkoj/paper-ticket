
import { Field, Input, Label, Button } from "@headlessui/react"
import clsx from 'clsx'

export default function Login(){

    return (
        <div className="p-6 flex flex-col items-center w-full max-w-md px-4 bg-neutral-100 rounded-xl">
            <Field>
                <Label className="text-sm/6 font-medium text-black">Email</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-black',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25'
                    )}
                    />
            </Field>
            <Field>
                <Label className="text-sm/6 font-medium text-black">Password</Label>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-black',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25'
                    )}
                    />
            </Field>
            <Button className="mt-6 mb-6 rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
                    Submit
            </Button>
        </div>

    );
}