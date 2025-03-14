// Create export button and description box on hover

var svg = `
<svg class="svg-inline--fa fa-note-sticky absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<g filter="url(#filter0_d)">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.9119 99.5723C72.4869 100.189 74.2828 100.15 75.8725 99.3807L96.4604 89.4231C98.624 88.3771 100 86.1762 100 83.7616V16.2392C100 13.8247 98.624 11.6238 96.4604 10.5774L75.8725 0.619067C73.7862 -0.389991 71.3446 -0.142885 69.5135 1.19527C69.252 1.38636 69.0028 1.59985 68.769 1.83502L29.3551 37.9795L12.1872 24.88C10.5891 23.6607 8.35365 23.7606 6.86938 25.1178L1.36302 30.1525C-0.452603 31.8127 -0.454583 34.6837 1.35854 36.3466L16.2471 50.0001L1.35854 63.6536C-0.454583 65.3164 -0.452603 68.1876 1.36302 69.8477L6.86938 74.8824C8.35365 76.2395 10.5891 76.34 12.1872 75.1201L29.3551 62.0207L68.769 98.1651C69.3925 98.7923 70.1246 99.2645 70.9119 99.5723ZM75.0152 27.1813L45.1092 50.0001L75.0152 72.8189V27.1813Z" fill="white"/>
</mask>
<g mask="url(#mask0)">
<path d="M96.4614 10.593L75.8567 0.62085C73.4717 -0.533437 70.6215 -0.0465506 68.7498 1.83492L1.29834 63.6535C-0.515935 65.3164 -0.513852 68.1875 1.30281 69.8476L6.8125 74.8823C8.29771 76.2395 10.5345 76.339 12.1335 75.1201L93.3604 13.18C96.0854 11.102 100 13.0557 100 16.4939V16.2535C100 13.84 98.6239 11.64 96.4614 10.593Z" fill="#D9D9D9"/>
<g filter="url(#filter1_d)">
<path d="M96.4614 89.4074L75.8567 99.3797C73.4717 100.534 70.6215 100.047 68.7498 98.1651L1.29834 36.3464C-0.515935 34.6837 -0.513852 31.8125 1.30281 30.1524L6.8125 25.1177C8.29771 23.7605 10.5345 23.6606 12.1335 24.88L93.3604 86.8201C96.0854 88.8985 100 86.9447 100 83.5061V83.747C100 86.1604 98.6239 88.3603 96.4614 89.4074Z" fill="#E6E6E6"/>
</g>
<g filter="url(#filter2_d)">
<path d="M75.8578 99.3807C73.4721 100.535 70.6219 100.047 68.75 98.1651C71.0564 100.483 75 98.8415 75 95.5631V4.43709C75 1.15852 71.0565 -0.483493 68.75 1.83492C70.6219 -0.0467614 73.4721 -0.534276 75.8578 0.618963L96.4583 10.5773C98.6229 11.6237 100 13.8246 100 16.2391V83.7616C100 86.1762 98.6229 88.3761 96.4583 89.4231L75.8578 99.3807Z" fill="white"/>
</g>
<g style="mix-blend-mode:overlay" opacity="0.25">
<path style="mix-blend-mode:overlay" opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M70.8508 99.5723C72.4258 100.189 74.2218 100.15 75.8115 99.3807L96.4 89.4231C98.5635 88.3771 99.9386 86.1762 99.9386 83.7616V16.2391C99.9386 13.8247 98.5635 11.6239 96.4 10.5774L75.8115 0.618974C73.7252 -0.390085 71.2835 -0.142871 69.4525 1.19518C69.1909 1.38637 68.9418 1.59976 68.7079 1.83493L29.2941 37.9795L12.1261 24.88C10.528 23.6606 8.2926 23.7605 6.80833 25.1177L1.30198 30.1524C-0.51354 31.8126 -0.515625 34.6837 1.2975 36.3465L16.186 50L1.2975 63.6536C-0.515625 65.3164 -0.51354 68.1875 1.30198 69.8476L6.80833 74.8824C8.2926 76.2395 10.528 76.339 12.1261 75.1201L29.2941 62.0207L68.7079 98.1651C69.3315 98.7923 70.0635 99.2645 70.8508 99.5723ZM74.9542 27.1812L45.0481 50L74.9542 72.8188V27.1812Z" fill="url(#paint0_linear)"/>
</g>
</g>
</g>
</g>
<defs>
<filter id="filter0_d" x="-6.25" y="-4.16667" width="112.5" height="112.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2.08333"/>
<feGaussianBlur stdDeviation="3.125"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="-8.39436" y="15.6951" width="116.728" height="92.6376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="60.4167" y="-8.33346" width="47.9167" height="116.667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="49.939" y1="-5.19792e-05" x2="49.939" y2="100.001" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0">
<rect width="100" height="100" fill="white"/>
</clipPath>
</defs>
</svg>`

var hoverBox = `
<div data-radix-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(982.567px, 45.8667px); min-width: max-content; z-index: 40; --radix-popper-available-width: 1818.6666259765625px; --radix-popper-available-height: 501.4166870117187px; --radix-popper-anchor-width: 32px; --radix-popper-anchor-height: 32px; --radix-popper-transform-origin: 50% 0px;">
    <div data-side="bottom" data-align="center" data-state="delayed-open" class="bg-sd-popover text-sd-popover-foreground rounded-sd-md z-modal text-xs shadow animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 max-w-[300px] border-sd-border border" style="--radix-tooltip-content-transform-origin: var(--radix-popper-transform-origin); --radix-tooltip-content-available-width: var(--radix-popper-available-width); --radix-tooltip-content-available-height: var(--radix-popper-available-height); --radix-tooltip-trigger-width: var(--radix-popper-anchor-width); --radix-tooltip-trigger-height: var(--radix-popper-anchor-height);">
        <div class="rounded-sd-md relative px-3 py-1.5">Export to Visual Studio Code</div>
        <span id="radix-:ri:" role="tooltip" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
            <div class="rounded-sd-md relative px-3 py-1.5">Export to Visual Studio Code</div>
        </span>
    </div>
</div>`

function exportButton(svg) {
    return`
    <div id="export-to-VSC-btn" class="relative flex">
        <div id="export-btn" class="relative flex overflow-hidden rounded bg-fill-tertiary dark:bg-fill-tertiary ml-[6px]">
            <div class="group flex flex-none items-center justify-center hover:bg-fill-quaternary dark:hover:bg-fill-quaternary">
                <div class="flex cursor-pointer p-2 text-gray-60 dark:text-gray-60">
                    <div class="relative text-[16px] leading-[normal] before:block before:h-4 before:w-4">
                        ${svg}
                    </div>
                </div>
            </div>
        </div>
    </div>`
}
const exp = exportButton(svg)
document.getElementById('ide-top-btns').insertAdjacentHTML('beforeend', exp);

const button = document.getElementById('export-to-VSC-btn');

button.addEventListener("mouseenter", () => {
    document.body.insertAdjacentHTML('beforeend', hoverBox);
});

button.addEventListener("mouseleave", () => {
    document.body.removeChild(document.body.lastChild);
});




