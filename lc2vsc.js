const exportButton = `
<div id="export-to-VSC-btn" class="relative flex">
    <div id="export-btn" class="relative flex overflow-hidden rounded bg-fill-tertiary dark:bg-fill-tertiary ml-[6px]">
        <div class="group flex flex-none items-center justify-center hover:bg-fill-quaternary dark:hover:bg-fill-quaternary">
            <div class="flex cursor-pointer p-2 text-gray-60 dark:text-gray-60">
                <div class="relative text-[16px] leading-[normal] before:block before:h-4 before:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-inline--fa fa-note-sticky absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
`
document.getElementById('ide-top-btns').insertAdjacentHTML('beforeend', exportButton);