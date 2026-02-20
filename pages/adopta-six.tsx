"use client";

import { LightbulbIcon } from "lucide-react";
import { MapMark } from "../shared/map-mark";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export function AdoptaSixPage() {
    return (
        <>

        <Card className="w-full">
            <div className="px-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
            <h3 className="text-lg font-semibold tracking-tight max-w-[50%] truncate">Adopta un SIX</h3>
            </div>
            </div>
        </Card>
        <Card className="w-full">
            <MapMark />

            <div className="px-6 flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center mt-4">
                    <h3 className="text-lg font-semibold tracking-tight max-w-[50%] truncate">SIX NL ABARROTES EL ROLA</h3>
                    
                    <ButtonGroup>
                        <ButtonGroup>
                            <Button variant="outline" size="icon-sm">
                                <LightbulbIcon />
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button variant="outline" size="sm">
                                Ver encuesta
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-full">
                        <p className="text-muted-foreground text-xs">Dirección</p>
                        <p className="text-sm font-medium font-mono">Calle 16 de Septiembre 110, Centro, 64000 Monterrey, N.L.</p>
                    </div>
                </div>

            </div>
        </Card>
        </>
    );
}