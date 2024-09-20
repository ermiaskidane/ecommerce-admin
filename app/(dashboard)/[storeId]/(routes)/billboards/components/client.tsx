"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, BillboardColumn } from "./columns";

interface BillboardClientProps {
  // data: Billboard[];
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
        {/* as mongodb has to check through ObjectIDwhich has hex string with 12 bytes I used a random number insted of string,
        if our database is sql we can use  three length hex string representation like "new" 
         */}
        {/* <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}> */}
        <Button onClick={() => router.push(`/${params.storeId}/billboards/6512c326f323f44d75c5414d`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};