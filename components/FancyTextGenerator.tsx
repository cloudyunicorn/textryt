"use client";

import { useState } from "react";
import { transform, fontStyles } from "@/utils/transformers";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Sparkles, Trash2, Type } from "lucide-react";

export default function FancyTextGenerator() {
    const [input, setInput] = useState("Fancy Text");

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard", {
            description: text,
            duration: 2000,
        });
    };

    const handleClear = () => {
        setInput("");
        toast.info("Cleared text");
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Input Area */}
            <Card className="p-1 shadow-lg bg-background/50 backdrop-blur border-muted-foreground/10">
                <div className="relative">
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something amazing..."
                        className="min-h-[160px] text-lg md:text-xl resize-none border-0 focus-visible:ring-0 bg-transparent p-6 placeholder:text-muted-foreground/50"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        {input && (
                            <Button variant="ghost" size="icon" onClick={handleClear} className="text-muted-foreground hover:text-foreground">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                </div>
            </Card>

            {/* Stats / Info - MinimalistDivider */}
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest pl-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{fontStyles.length} Styles Generated</span>
            </div>

            {/* Output Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {fontStyles.map((style) => {
                    const transformedText = transform(input || "Fancy Text", style.id);
                    return (
                        <Card
                            key={style.id}
                            className="group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 bg-card/50 hover:bg-card"
                        >
                            <div
                                onClick={() => handleCopy(transformedText)}
                                className="p-5 flex flex-col gap-3 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase group-hover:text-primary/70 transition-colors">
                                        {style.name}
                                    </span>
                                    <Type className="w-3 h-3 text-muted-foreground/20 group-hover:text-primary/20" />
                                </div>

                                <p className="text-lg md:text-xl font-medium truncate text-foreground/90">
                                    {transformedText}
                                </p>

                                {/* Hover Action */}
                                <div className="md:absolute md:top-4 md:right-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200">
                                    <Button size="sm" variant="secondary" className="w-full md:w-auto shadow-sm gap-2 h-8 text-xs font-medium">
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy
                                    </Button>
                                </div>
                                {/* Mobile Action (Visible by default in layout, but let's make it cleaner - entire card click works, button is just visual cue) */}
                                <div className="flex md:hidden justify-end mt-2">
                                    <Button size="sm" variant="secondary" className="h-7 text-xs gap-1.5 w-full">
                                        <Copy className="w-3 h-3" />
                                        Copy
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
