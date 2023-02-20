import { JsxOpeningElement } from "typescript";

class Bone {
    parent: Bone | null
    children: Bone[]
    length: number
    angle: number

    constructor(length: number, angle: number, parent: Bone | null = null, children: Bone[] = []) {
        this.parent = parent;
        this.children = children;
        this.length = length;
        this.angle = angle;
    }
}

class Skeleton {
    root: Bone

    constructor(size: number, lengths: number[], angles: number[]) {
        let bones: Bone[] = [];
        for (let index of Array.from(Array(size).keys())) {
            const parent = bones.length > 0 ? bones.slice(-1)[0] : null;
            bones.push(new Bone(lengths[index], angles[index], parent))
        }

        for (let index of Array.from(Array(size).keys())) {
            if (index == size - 1) {
                continue
            }
            bones[index].children.push(bones[index + 1])
        }
        this.root = bones[0];
    }
}

export default Skeleton;