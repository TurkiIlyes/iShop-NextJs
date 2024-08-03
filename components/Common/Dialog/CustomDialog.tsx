import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const CustomDialog = ({
  label,
  id,
  isOpen,
  setIsOpen,
  handelDelete,
}: {
  label: string;
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handelDelete: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger onClick={() => setIsOpen(true)}>
        Delete {label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" py-2 text-error-900">
            sure you want to delete this {label} ?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            {label} and remove it&lsquo;s data from the servers.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" onClick={handelDelete}>
            Delete
          </Button>
          <DialogClose>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
