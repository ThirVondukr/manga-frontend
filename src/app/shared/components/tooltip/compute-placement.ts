type Side = "top" | "bottom" | "left" | "right";
type Offset = "start" | "center" | "end";
export type Placement = `${Side}-${Offset}`;

export function computePlacement(
    subject: HTMLElement,
    tooltip: HTMLElement,
    placement: Placement
): { x: number, y: number } {
    const [side, offset] = placement.split("-") as [Side, Offset];

    let offsets: { x: number, y: number };
    switch (side) {
        case "top":
            offsets = {
                x: subject.offsetWidth / 2 - tooltip.offsetWidth / 2,
                y: -tooltip.offsetHeight
            }
            break
        case "bottom":
            offsets = {
                x: subject.offsetWidth / 2 - tooltip.offsetWidth / 2,
                y: subject.offsetHeight,
            }
            break
        case "left":
            offsets = {
                x: -tooltip.offsetWidth,
                y: subject.offsetHeight / 2 - tooltip.offsetHeight / 2,
            }
            break
        case "right":
            offsets = {
                x: subject.offsetWidth,
                y: subject.offsetHeight / 2 - tooltip.offsetHeight / 2,
            }
            break

    }

    const offsetAxis = (side === "top" || side == "bottom") ? "x" : "y";
    const offsetProperty = offsetAxis == "x" ? "offsetWidth" : "offsetHeight";
    const axisOffset = subject[offsetProperty] / 2 - tooltip[offsetProperty] / 2;

    if (offset == "start") {
        offsets[offsetAxis] -= axisOffset;
    } else if (offset == "end") {
        offsets[offsetAxis] += axisOffset;
    }

    return offsets;
}
