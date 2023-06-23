import React, {ComponentProps, FC} from "react";
import {Grid, List, ListItem} from "@mui/material";
import {TargetTypeEnum} from "../pages/App.tsx";

export interface GpuItemData {
    name: string,
    mark: number,
}
export interface CpuItemData {
    name: string,
    singleMark: number,
    multiMark: number,
}

interface HomeListShowProp extends ComponentProps<any> {
    cpuList: CpuItemData[],
    gpuList: GpuItemData[],
    type: TargetTypeEnum,
}

const HomeListShow: FC<HomeListShowProp> = (props) => {
    return (
        <List>
            { useListTitle(props.type) }
            { useListItems(props) }
        </List>
    )
}

function useListTitle(type: TargetTypeEnum): React.ReactNode {
    if (type == TargetTypeEnum.CPU) {
        return (
            <ListItem>
                <Grid>

                </Grid>
            </ListItem>
        )
    } else {
        return (
            <ListItem>

            </ListItem>
        )
    }
}

function useListItems(props: HomeListShowProp): React.ReactNode[] {
    return props.type == TargetTypeEnum.CPU
        ? props.cpuList.map(createCpuItem)
        : props.gpuList.map(createGpuItem)
}

function createCpuItem(data: CpuItemData): React.ReactNode {
    return (
        <ListItem>
            <Grid>

            </Grid>
        </ListItem>
    )
}

function createGpuItem(data: GpuItemData): React.ReactNode {
    return (
        <ListItem>
            <Grid>

            </Grid>
        </ListItem>
    )
}