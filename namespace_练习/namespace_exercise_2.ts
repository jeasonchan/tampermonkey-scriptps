//不期望该命名空间导出，不加export
namespace MyNameSpace {
    export var ArgInOtherFile: string = "hahah";

}

//期望该命名空间导出，加export
export namespace MyNameSpace_2 {
    export function printHello(): void {
        console.log("Hello world!")
    }
}

//一定要严格遵守！！！
//希望在别的文件中使用的就用export！！！
//不希望的就不加！！！
export var hahahah: string = "aaaa";
